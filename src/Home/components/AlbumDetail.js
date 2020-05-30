import React from 'react';
import {Text, View} from 'react-native';
import Card from '../../Shared/components/Card';
import CardSection from '../../Shared/components/CardSection';
import Button from '../../Shared/components/Button';

const AlbumDetail = ({navigation, title, albumId}) => {
  const {headerContentStyle, headerTextStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          onPress={() =>
            navigation.navigate('photoScreen', {albumId: albumId})
          }>
          See Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
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

export default AlbumDetail;
