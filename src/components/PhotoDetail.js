import React, { useState, useEffect } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios';

const PhotoDetail = ({ title, imageUrl, photoId }) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  const [comments, setComments] = useState(null);
  const [commentsVisible, setCommentsVisible] = useState(false);

  useEffect(() => {
    const fetchComments = () => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${photoId}&format=json&nojsoncallback=1`)
      .then(response => setComments(response.data.comments.comment)); 
    }
    fetchComments()
  }, [])

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: imageUrl }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: imageUrl }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>
          See Now!
        </Button>
      </CardSection>

      <CardSection>
        <Button onPress={() => setCommentsVisible(commentsVisible => !commentsVisible)}>
          {!commentsVisible ? 'Show comments' : 'Hide comments'}
        </Button>
      </CardSection>
      {commentsVisible && comments.map(comment => {
        return (
          <CardSection>
            <Text style={styles.commentAuthor} >{comment.realname}: </Text>
            <Text>{comment._content}</Text>
          </CardSection>
        )
      })}
    </Card>
  );
};

const styles = {
  commentAuthor: {
    color: 'blue'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default PhotoDetail;
