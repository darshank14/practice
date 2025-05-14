import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { ScreenStatusBar } from '../../../component/base/staus-bar'
import config from '../../../config'
import globalStyles from '../../../globalStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import Api from '../../../service/Api'
import { API_EVENTLIST } from '../../../service/apiEndPoint'
import List from '../../../component/base/elements/FlatList'
import { useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Config from '../../../config'
import { formatDate } from '../../../utils/CommonUtils'
//arrowright



const Index = () => {

  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);


  const fetchData = async () => {
    // Simulate API call

    try {
      const response = await Api.post(API_EVENTLIST)

      if (response?.success) {
        setData(response?.data?.events)
        isRefreshing(false)
      }

    } catch (error) {
      config.log(error)
    }

  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const onRefresh = () => {
    setIsRefreshing(true);
    fetchData().then(() => setIsRefreshing(false));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itenConatainer}>
      <Image source={{ uri: item.event_profile_img }} style={styles.itemImage} resizeMode='contain' />

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 1, }}>{item.event_name}</Text>
          <TouchableOpacity style={{ padding: 6, alignItems: 'flex-end' }} onPress={() => { }}>
            <Config.Images.ARROW width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          {/* {item.danceStyles?.map((style,index)=>(
           <View key={index}>
            <Text style={styles.date}>{formatDate(style.create_at)} - </Text>
            <Text style={styles.date}>{formatDate(style.updated_at)}</Text>
          </View>
          ))
          }  */}

          <Text style={styles.date}>{item.readable_from_date}</Text>
          <Text style={styles.date}>{item.readable_from_to}</Text>

        </View>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Text style={styles.price}>€{item.event_price_from} - </Text>
          <Text style={styles.price}>€{item.event_price_to}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[globalStyles.container, { backgroundColor: config.Theme.COLOR_GRAY }]}>
      <Text>search screen</Text>

      <List
        data={data}
        renderItem={renderItem}
        apiCall={true}
        keyExtractor={index => index.id}

      // onRefresh={onRefresh}
      // onEndReached={() => console.log('Load more')}
      //ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 50 }}>No Data Found</Text>}
      // showEndReachedLoader={true}

      />
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  itenConatainer: {
    padding: 6, gap: 8,
    flexDirection: 'row',
    backgroundColor: config.Theme.COLOR_FFF,
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 10
  },
  itemImage: {
    height: 60, aspectRatio: 1, borderRadius: 10
  },
  date: { fontSize: 16, color: config.Theme.GREEN },
  price: { fontSize: 16, color: config.Theme.COLOR_GRAY }
})