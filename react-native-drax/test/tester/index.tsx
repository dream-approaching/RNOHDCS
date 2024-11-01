import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import {PortalProvider} from '@gorhom/portal';
import testSuiteByName from './testerDemo';

const comList = Object.keys(testSuiteByName).map(testSuiteName => {
  return {
    name: testSuiteName,
    com: testSuiteByName[testSuiteName as keyof typeof testSuiteByName],
  };
});
// @ts-ignore
comList.sort((a, b) => {
  // return a.name.localeCompare(b.name);
  return a - b;
});

function draxDemo() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <PortalProvider>
            {comList.map(com => {
              const TestSuite = com.com;
              return (
                <Page key={com.name} name={`${com.name}`}>
                  <TestSuite key={com.name} />
                </Page>
              );
            })}
          </PortalProvider>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
export default draxDemo;
