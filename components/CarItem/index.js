import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Button from '../Button';
import styles from './styles';

const CarItem = ({name, tagline,taglineCTA, image }) => {
    return (
        <>
            <View style={styles.carContainer}>
                <ImageBackground
                    style={styles.image}
                    source={image} />
                <View style={styles.titles}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>
                        {tagline}
                        {' '}
                        <Text style={styles.subtitleCTA}>
                            {taglineCTA}
                        </Text>
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        type="primary"
                        content="Custom Order"
                        onPress={() => {console.warn('Custom order was pressed')}}
                    />
                    <Button
                        content="Existing inventory"
                        onPress={() => {console.warn('Existing inventory was pressed')}}
                    />
                </View>
            </View>
        </>
    )
};

export default CarItem;
