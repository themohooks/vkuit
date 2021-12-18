import React from 'react';
import {isDesktop} from 'react-device-detect';
import ReactDOM from 'react-dom';
import { Icon28GameOutline } from '@vkontakte/icons';
import { Icon28Notifications } from '@vkontakte/icons';
import { AppRoot, ConfigProvider, AdaptivityProvider, Panel, PanelHeaderBack, View, PanelHeader, Cell, Avatar, Group, Spinner, Search, TabbarItem, Tabbar, Epic, Badge, SplitLayout, SplitCol, withAdaptivity, Placeholder, usePlatform, ViewWidth, VKCOM, ANDROID, SMALL_TABLET, SimpleCell, Root, Banner, Header, Button } from '@vkontakte/vkui';
import { Icon28UserOutline, Icon28UsersOutline, Icon28MusicOutline, Icon28UserCircleOutline, Icon28ClipOutline, Icon28ServicesOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon56NewsfeedOutline, Icon28HomeOutline, Icon28AddCircleFillBlue } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

const App = withAdaptivity(({ viewWidth }) => {
  const platform = usePlatform();
  const [activeStory, setActiveStory] = React.useState('profile');
  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
  const isDesktopp = isDesktop;
  const hasHeader = platform !== VKCOM;
  return (
    <ConfigProvider hasmouse="false" scheme="space_gray" platform="android">
  <AdaptivityProvider>
    <AppRoot>
  <SplitLayout
      header={hasHeader && <PanelHeader separator={false} />}
      style={{ justifyContent: "center" }}
    >
      {isDesktopp && (
        <SplitCol fixed width={280} maxWidth={280}>
          <Panel>
            {hasHeader && <PanelHeader />}
            <Group>
              <Cell
                disabled={activeStory === 'feed'}
                style={activeStory === 'feed' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="feed"
                onClick={onStoryChange}
                before={<Icon28NewsfeedOutline />}
              >
                feed
              </Cell>
              <Cell
                disabled={activeStory === 'services'}
                style={activeStory === 'services' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="services"
                onClick={onStoryChange}
                before={<Icon28ServicesOutline />}
              >
                services
              </Cell>
              <Cell
                disabled={activeStory === 'messages'}
                style={activeStory === 'messages' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="messages"
                onClick={onStoryChange}
                before={<Icon28MessageOutline />}
              >
                messages
              </Cell>
              <Cell
                disabled={activeStory === 'clips'}
                style={activeStory === 'clips' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="clips"
                onClick={onStoryChange}
                before={<Icon28ClipOutline />}
              >
                clips
              </Cell>
              <Cell
                disabled={activeStory === 'profile'}
                style={activeStory === 'profile' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="profile"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}
              >
                profile
              </Cell>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol
        animate={!isDesktopp}
        spaced={isDesktopp}
        width={isDesktopp ? '760px' : '100%'}
        maxWidth={isDesktopp ? '760px' : '100%'}
      >
        <Epic activeStory={activeStory} tabbar={!isDesktopp &&
          <Tabbar>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'feed'}
              data-story="feed"
              text="Главная"
            ><Icon28HomeOutline /></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'services'}
              data-story="services"
              text="Игры"
            ><Icon28GameOutline/></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'messages'}
              data-story="messages"
            ><Icon28AddCircleFillBlue/></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'clips'}
              data-story="clips"
              text="События"
            ><Icon28Notifications /></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'profile'}
              data-story="profile"
              indicator={<Badge mode="prominent" />}
              text="Профиль"
            ><Icon28UserOutline /></TabbarItem>
          </Tabbar>
        }>
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader left={<PanelHeaderBack />}>Главная</PanelHeader>
              <Group style={{ height: 'auto' }}>
            <Cell expandable before={<Icon28UserOutline/>} data-story="panel2"
                onClick={onStoryChange}>
              Friends
            </Cell>
            <Cell expandable before={<Icon28UsersOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Communities
            </Cell>
            <Cell expandable before={<Icon28MusicOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Music
            </Cell>
          </Group>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader left={<PanelHeaderBack />}>Сервисы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader left={<PanelHeaderBack />}>Сообщения</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="panel2" activePanel="messages">
            <Panel id="messages">
              <PanelHeader left={<PanelHeaderBack />}>Сооfgddfghdfohfd[pohg[phogf[phop[gohgfdpбщения</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader left={<PanelHeaderBack />}>Клипы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader left={<PanelHeaderBack />}>Профиль</PanelHeader>
              <Group style={{ height: '1000px' }}>
              <Banner
        before={<Avatar size={48} src={"https://sfs1-eu.hostcats.ru/sfs/img/IMG_61a88ee14c0f47.44627957.jpg"} />}
        header="Это ваш аккаунт"
        subheader="Это ваш аккаунт"
        actions={<Button mode="primary">Это ваш аккаунт</Button>}
      />
      <Banner
        mode="image"
        header="Ебать!"
        subheader="Разблокировано дохуя достижений!"
        background={
          <div
            style={{
              backgroundColor: '#65c063',
              backgroundImage: 'url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 320,
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        actions={<Button mode="overlay_primary">Похуй</Button>}
      />
    </Group>
         </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
    </AppRoot>
  </AdaptivityProvider>
</ConfigProvider>
  );
}, {
  viewWidth: true
});

ReactDOM.render(<App />, document.getElementById('root'));

export default App;