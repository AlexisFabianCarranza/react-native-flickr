import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import PhotoDetail from '../components/PhotoDetail';
import Loading from '../../Shared/components/Loading';

const PhotoScreen = ({route}) => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const {albumId} = route.params;

  useEffect(() => {
    if (!photos) {
      setTimeout(() => setLoading(!loading), 1200);
    }
  }, [loading, photos]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
        )
        .then(response => setPhotos(response.data.photoset.photo));
    };
    fetchData();
  }, [albumId]);

  const renderAlbums = () => {
    return photos.map(photo => (
      <PhotoDetail
        key={photo.title}
        photoId={photo.id}
        title={photo.title}
        imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${
          photo.id
        }_${photo.secret}.jpg`}
      />
    ));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>{renderAlbums()}</ScrollView>
    </View>
  );
};

export default PhotoScreen;
