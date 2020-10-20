//arquivo app.component = 1 arquivo carregado pelo react

import { AppLoading, LoadFontsTask, Task } from './app-loading.component';
import { appMappings, appThemes } from './app-theming';
import { AppIconsPack } from './app-icons-pack';
import { StatusBar } from '../components/status-bar.component';
import { SplashImage } from '../components/splash-image.component';
import { AppNavigator } from '../navigation/app.navigator';
import { AppStorage } from '../services/app-storage.service';
import { Mapping, Theme, Theming } from '../services/theme.service';


'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),

  source={require('../assets/images/image-splash.png')}



//arquivo app.navigator = 2 arquivo carregado pelo react


import { HomeNavigator } from './home.navigator';
import { WelcomeNavigator } from './welcome.navigator';
import { LayoutsNavigator } from './layouts.navigator';
import { SignIn1Screen } from '../scenes/auth/sign-in-1.component';
import { SignIn4Screen } from '../scenes/auth/sign-in-4.component';


//arquivo welcome.navigator = 3 arquivo carregado pelo react


import { SignIn4Screen } from '../scenes/auth/sign-in-4.component';
import { SignUp4Screen } from '../scenes/auth/sign-up-4.component';
import { HomeNavigator } from './home.navigator';
import { ForgotPasswordScreen } from '../scenes/auth/forgot-password.component';

//depois o welcome chama o arquivo  /scenes/auth/sign-in-4.component
import ContentView from '../../layouts/auth/sign-in-4';

//o arquivo scene(animation) /scenes/auth/sign-in-4.component chama o arquivo '../../layouts/auth/sign-in-4'

import { ImageOverlay } from './extra/image-overlay.component';
import {
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  TwitterIcon,
} from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
'./assets/image-background.jpg'

//arquivo  tela '../../layouts/auth/sign-in-4' pode chamar 3 scenes que respectivamente chamam cada um uma tela

           1 tela de recuperar senha{
             // a primeira delas pode ser acessado pelo button text ' Esqueceu sua senha ? ' chamando a scene ../scenes/auth/forgot-password.component
             import ContentView from '../../layouts/auth/forgot-password';

             // respectivamente a scene ../scenes/auth/forgot-password.component chama a tela ../../layouts/auth/forgot-password
             import { ImageOverlay } from './extra/image-overlay.component';
             import { EmailIcon } from './extra/icons';
             import { KeyboardAvoidingView } from './extra/3rd-party';
            ' ./assets/image-background.jpg'
           }

           2 tela home(tela incial do app){
             // a segunda delas pode ser acessado pelo button 'entrar' chamando a navigation './home.navigator';
             import { LayoutsNavigator } from './layouts.navigator';
             import { ComponentsNavigator } from './components.navigator';
             import { ThemesNavigator } from './themes.navigator';
             import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
             import { HomeDrawer } from '../scenes/home/home-drawer.component';
             import { LibrariesScreen } from '../scenes/libraries/libraries.component';

             // a './home.navigator' na const HomeNavigator chama o drawer.navigator './layouts.navigator'
             import { LayoutsScreen } from '../scenes/layouts/layouts.component';

            // o ./layouts.navigator chama a scene(tela) dos layouts: ../scenes/layouts/layouts.component
              import { SafeAreaLayout } from '../../components/safe-area-layout.component';
              import { MenuIcon } from '../../components/icons'
           }

           3 tela de registro{
             // a terceira delas button text ' Você é novo por aqui ? Crie sua conta ' chamando a scene SignUp4Screen '../scenes/auth/sign-up-4.component'
              import ContentView from '../../layouts/auth/sign-up-4';

            // a scene '../scenes/auth/sign-up-4.component' chama a tela layout '../../layouts/auth/sign-up-4';
              import { ImageOverlay } from './extra/image-overlay.component';
              import { ProfileAvatar } from './extra/profile-avatar.component';
              import { EmailIcon, EyeIcon, EyeOffIcon, FacebookIcon, GoogleIcon, PersonIcon, PlusIcon, TwitterIcon } from './extra/icons';
              import { KeyboardAvoidingView } from './extra/3rd-party';
              './assets/image-background.jpg'

            }
//
