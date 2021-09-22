import React from 'react';
import { FlatList } from 'react-native';

const VirtualizedView = (props) =>(
    <FlatList
        data={[]}
        ListEmptyComponent={null}
        keyExtractor={() => 'dummy'}
        renderItem={null}
        ListHeaderComponent={() => (
            <React.Fragment>{props.children}</React.Fragment>
        )}
    />
);
export default VirtualizedView;