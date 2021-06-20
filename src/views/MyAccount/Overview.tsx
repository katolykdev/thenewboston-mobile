import { Colors, Custom, Typography } from "styles";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, TouchableOpacity, View, Modal } from "react-native";
import Style from "./Style";


// components
import Accounts from "../../components/Accounts/Accounts";
import CustomButton from "../../components/CustomButton";
import AccountNumber from "../../components/AccountNumber/AccountNumber";
import SignKey from "../../components/SignKey/SignKey";

import CreateAccountWidget from "../../components/CreateAccountWIdget/CreateAccountWidget";
import DoneModalViewWidget from "../../components/CustomWidgets/DoneModalview";
import BottomDrawer from "react-native-bottom-drawer-view";
import { BlurView, VibrancyView } from "@react-native-community/blur";
// svg
import Refresh from "../../assets/svg/Refresh.svg";
import LinearGradient from 'react-native-linear-gradient';


const TAB_BAR_HEIGHT = 20;
const DOWN_DISPLAY = 50;

const OverviewScreen = (props) => {

  const [accounts, setAccoiunts] = useState([
    { active: true, name: "John Doe" },
    { active: false, name: "Rob Tin" },
    { active: false, name: "Hissein Johnson" },
    { active: false, name: "Brad Scott" },
  ]);
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);  
  const [doneVisible, setDoneVisible] = useState(true); 
  const [viewRef, setViewRef] = useState(null);  

  const handleSendCoins = () => {
    console.log("send coins");
  };

  return (
    <View style={Style.container}  ref={(viewRef) => { setViewRef(viewRef); }}> 
      <View style={{ alignItems: "center"}} >
        <Text style={Style.heading}>John Doe</Text> 
        <Accounts
          accounts={accounts}
          addAccount={() => setModalVisible(true)}
        />

      </View> 

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Custom.row, Custom.mt30]}>
          <View>
            <Text style={[Style.subHeading]}>MY ACCOUNT BALANCE</Text>
            <Text style={[Style.heading]}>52.659</Text>
          </View>
          <TouchableOpacity
            style={Style.refreshbutton}
            onPress={() => console.log("refresh")}
          >
            <Refresh />
          </TouchableOpacity>
        </View>

        {/* send coins  */}
        <CustomButton
          title="Send Coins"

          onPress={()=>props.navigation.navigate('sendcoins1')}
          buttonColor={Colors.WHITE}
          loading={loading}
          customStyle={{ width: "35%" }}
        />

        <AccountNumber
          accountNumber={
            "c7c69c0abe97c2e0bbc2394e11e971d3fb0a75ba96c5d7262fb5272bb5ec7f6a"
          }
        />
        <SignKey
          signKey={
            "................................................................................"
          }
        />

        <CustomButton
          title="Delete Account"
          onPress={handleSendCoins}
          buttonColor={Colors.WHITE}
          loading={loading}
          customStyle={Style.deleteButton}
        />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}
      >
        <View style={Style.modalContainer}>
          <CreateAccountWidget title={"Create or Add Account"}
            navigation={props.navigation}
            handleCancel={() => {
              setModalVisible(false);
            }}
            />
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={doneVisible}  
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}
        
      >
         <BlurView
          style={Style.absolute}
          blurType="dark"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />
             
         <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['rgba(29, 39, 49, 0.9)', 'rgba(53, 96, 104, 0.9)']} style={Style.doModalContainer}>
            <DoneModalViewWidget 
                    title={"Done"}
                    message={"Your account has been successfully created!"}
                    navigation={props.navigation}
                    button={"Ok"} 
                    handleOk={() => {
                    setDoneVisible(false);
                }} />
        </LinearGradient> 
        
        
      </Modal>


    </View>
  );
};

export default OverviewScreen;
