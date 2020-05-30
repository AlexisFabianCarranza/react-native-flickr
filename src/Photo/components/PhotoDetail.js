import React, {useState, useEffect} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from '../../Shared/components/Card';
import CardSection from '../../Shared/components/CardSection';
import Button from '../../Shared/components/Button';
import {List} from 'react-native-paper';
import axios from 'axios';

const PhotoDetail = ({title, imageUrl, photoId}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  const [comments, setComments] = useState(null);
  const [commentsOn, putCommentsOn] = useState(false);

  const _searchComment = async () => {
    try {
      let response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${photoId}&format=json&nojsoncallback=1`,
      );
      setComments(response.data.comments.comment);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchComments = () => {};
    fetchComments();
  }, [photoId]);

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: imageUrl}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: imageUrl}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>See Now!</Button>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => {
            _searchComment();
            putCommentsOn(commentsOn => !commentsOn);
          }}>
          {!commentsOn ? 'Show comments' : 'Hide comments'}
        </Button>
      </CardSection>
      {commentsOn &&
        comments &&
        comments.map((comment, index) => {
          return (
            <CardSection key={index}>
              <List.Item
                title={comment.realname}
                description={comment._content}
                style={{flex: 1}}
                left={props => <List.Icon {...props} icon="comment" />}
              />
            </CardSection>
          );
        })}
    </Card>
  );
};

const styles = {
  commentAuthor: {
    color: 'blue',
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default PhotoDetail;
