import { LayoutItem } from '../../model/layout-item.model';
import { api } from '../../services/service';

export interface AuthData extends LayoutItem {
  route: string;
}

  load = async () => {
    const response = await api.get("/testaa");

    const { docs } = response.data;

    console.log('response: ', docs);
  };


export const data: AuthData[] = [
  {
    title: 'Sign In',
    description: 'Option 1',
    image: require('../../assets/images/bode.jpg'),
    route: 'SignIn1',
  },
  {
    title: 'Sign In',
    description: 'Option 2',
    image: require('../../assets/images/boi.jpg'),
    route: 'SignIn2',
  },
  {
    title: 'Sign In',
    description: 'Option 3',
    image: require('../../assets/images/porco.jpg'),
    route: 'SignIn3',
  },
  {
    title: 'Sign In',
    description: 'Option 4',
    image: require('../../assets/images/boi.jpg'),
    route: 'SignIn4',
  },
  {
    title: 'Sign In',
    description: 'Option 5',
    image: require('../../assets/images/bode.jpg'),
    route: 'SignIn5',
  },
  {
    title: 'Sign Up',
    description: 'Option 1',
    image: require('../../assets/images/boi.jpg'),
    route: 'SignUp1',
  },
  {
    title: 'Sign Up',
    description: 'Option 2',
    image: require('../../assets/images/ovelha.jpg'),
    route: 'SignUp2',
  },
  {
    title: 'Sign Up',
    description: 'Option 3',
    image: require('../../assets/images/ovelha.jpg'),
    route: 'SignUp3',
  },
  {
    title: 'Sign Up',
    description: 'Option 4',
    image: require('../../assets/images/ovelha.jpg'),
    route: 'SignUp4',
  },
  {
    title: 'Forgot Password',
    description: 'Option 1',
    image: require('../../assets/images/bode.jpg'),
    route: 'ForgotPassword',
  },
];
