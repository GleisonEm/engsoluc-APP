import React from 'react';
import { LayoutList } from '../../components/layout-list.component';
import { Input, TopNavigation, TopNavigationAction, Divider, Layout} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import { api } from '../../services/service';
import { MenuIcon } from '../../components/icons';
import { data } from './data';

export const ProductList = ({ navigation }): React.ReactElement => {

  load = async () => {
    const response = await api.get("/products");

    const { docs } = response.data;

    console.log('response: ', docs);
  };

  const onItemPress = (index: number): void => {
    async () => {
      const response = await api.get("/testaa");

      const { docs } = response.data;

      console.log('response: ', docs);
    };
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />

  );





  return (
    <SafeAreaLayout
      insets='top'>
      <TopNavigation
        title="Bon'Cabrito"
        leftControl={renderDrawerAction()}
      />
      <LayoutList
        data={data}
          onItemPress={onItemPress}
      />
    </SafeAreaLayout>
  );
};
