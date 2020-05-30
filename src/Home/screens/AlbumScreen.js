import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from '../components/AlbumDetail';
import Loading from '../../Shared/components/Loading';

const AlbumScreen = ({navigation}) => {
  const [photoset, setPhotoset] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!photoset) {
      setTimeout(() => setLoading(!loading), 1200);
    }
  }, [loading, photoset]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
        )
        .then(response => setPhotoset(response.data.photosets.photoset));
    };

    fetchData();
  }, []);

  const renderAlbums = () => {
    return photoset.map(album => (
      <AlbumDetail
        navigation={navigation}
        key={album.id}
        title={album.title._content}
        albumId={album.id}
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

export default AlbumScreen;
