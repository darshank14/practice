import React, { useState } from 'react';
import { View, StyleSheet, RefreshControl, FlatList, ActivityIndicator } from 'react-native';
import Config from '../../../config';
 import Utils from '../../../utils/CommonUtils';
import { widthPercentageToDP as wp, } from '../../../utils/CommonUtils';


 const List = ({
  ref,
  data,
  renderItem,
  apiCall,
  onRefresh = () => { },
  onEndReached = () => { },
  keyExtractorKey = 'id',
  numColumns = 1,
  ListEmptyComponent,
  showEndReachedLoader = false,
  allowRefresh = true,
  onViewableItemsChanged,
  viewabilityConfig,
  contentContainerStyle,
  keyExtractor = (item) => item[keyExtractorKey],
  onScrollToIndexFailed = () => { },
  horizontal = false,
  initialScrollIndex,
 }) => {
   let [showBottomLoader, setBottomLoader] = useState(false);

  return (
    <FlatList
      ref={ref}
      horizontal={horizontal}
      contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      numColumns={numColumns}
      keyboardShouldPersistTaps={'always'}
      keyExtractor={keyExtractor}
      refreshControl={
        allowRefresh && <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        setBottomLoader(true);
        onEndReached();
      }}
      ListEmptyComponent={!apiCall && ListEmptyComponent}
      ListFooterComponent={() => _listFooterComponent({ showEndReachedLoader, showBottomLoader, apiCall })}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      showsVerticalScrollIndicator={false}
      onScrollToIndexFailed={onScrollToIndexFailed}
      initialScrollIndex={initialScrollIndex}
    />
  );
};

const _listFooterComponent = ({ showEndReachedLoader, showBottomLoader, apiCall }) => {
  if (showEndReachedLoader && showBottomLoader && apiCall) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={'small'}
          color={Config.Theme.COLOR_FAFAFA}
        />
      </View>
    );
  } else {
    return null;
  }
}

List.displayName = 'List';

export default React.memo(List)

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(Utils.manageWidthPer(2.55)),
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
