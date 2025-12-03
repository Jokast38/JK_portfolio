import adminhotelImg from '../assets/images/Adminhotel.png';
import gestHotelImg from '../assets/images/GestHotelpage.png';
import rjmgImg from '../assets/images/RJMGsite.png';
import boxVitrineImg from '../assets/images/BoxVitrine.jpg';
import natureImg from '../assets/images/naturexplorer.png';
import meteoJKImg from '../assets/images/MeteoJK.png';
import gbprojetImg from '../assets/images/GBprojet.png';
import qcmprojetImg from '../assets/images/QCMprojet.png';
import nanaImg from '../assets/images/nana.png';
import joSocialImg from '../assets/images/JO_Social_Media.png';
import vetolibImg from '../assets/images/vetolib.png';
import flesImg from '../assets/images/fles.png';
import carnetImg from '../assets/images/carNet.png';
import bnkImg from '../assets/images/bnk.png';
import jeamsImg from '../assets/images/Jeams.png';
import jdwebsiteImg from '../assets/images/jdwebsite.png';
import laterangaImg from '../assets/images/LaTerangaB.png';
import lumin33Img from '../assets/images/lumin33store.png';
import onwImg from '../assets/images/own.jpg';
import sweetlawcookieImg from '../assets/images/sweetlawcookie.png';
import vitalineImg from '../assets/images/vitaline.png';
import iamelsyImg from '../assets/images/iamelsy.png';
import accesImg from '../assets/images/acces-concert.png';

const projetData = [
  {
    title: 'Réalisation 1 E5',
    image: adminhotelImg,
    description: 'Guest Hotel (Admin)',
    tech: 'PHP, MySQL, Bootstrap',
    github: 'https://github.com/Jokast38/Gesthotel.git'
  },
  {
    title: 'Réalisation 2 E5',
    image: gestHotelImg,
    description: 'Guest Hotel (Book)',
    tech: 'PHP, MySQL, Bootstrap',
    github: 'https://github.com/Jokast38/Gesthotel.git'
  },
  {
    title: 'Réalisation 3',
    image: rjmgImg,
    description: 'Projet RJMG Market',
    tech: '',
    link: ''
  },
  {
    title: 'Réalisation 4',
    image: boxVitrineImg,
    description: 'Box Vitrine (Formation)',
    tech: '',
    link: ''
  },
  {
    title: 'Réalisation 5',
    image: meteoJKImg,
    description: 'Projet Meteo (API Meteo)',
    tech: '',
    link: ''
  },
  {
    title: 'Réalisation 6',
    image: gbprojetImg,
    description: 'Gestion Budget (PHP)',
    tech: '',
    link: ''
  },
  {
    title: 'Réalisation 7',
    image: qcmprojetImg,
    description: 'QCM',
    tech: '',
    link: ''
  },
  {
    title: 'Réalisation 8',
    image: nanaImg,
    description: 'N.A.N.A site',
    tech: '',
    link: ''
  },
  {
    title: 'Réalisation 9',
    image: joSocialImg,
    description: 'Jo_Social_media',
    tech: '',
    link: ''
  },
  {
    title: 'Vetolib Project',
    image: vetolibImg,
    description: 'Vetolib',
    tech: 'Node JS, React JS',
    link: ''
  },
  {
    title: 'Founders Legion (Vitaline)',
    image: flesImg,
    description: 'Founders Legion (Vitaline)',
    tech: 'Wordpress',
    link: 'https://stagingwp.founderslegion.com'
  },
  {
    title: 'Vitaline Shop',
    image: vitalineImg,
    description: 'Founders Legion (Vitaline) Cross-selling Project',
    tech: 'Shopify, Liquide, JavaScript',
    link: 'https://vitaline.fr'
  },
  {
    title: 'Iam Elsy Shop',
    image: iamelsyImg,
    description: 'Founders Legion (Iam Elsy)',
    tech: 'Shopify, Liquide, JavaScript',
    link: 'https://iamelsy.fr'
  },
  {
    title: 'CarNet',
    image: carnetImg,
    description: 'CarNet (Personnel)',
    tech: 'ReactJS - Python',
    github: 'https://github.com/Jokast38/Projet-CarNet.git'
  },
  {
    title: 'BNK Projet Market',
    image: bnkImg,
    description: 'BNK Projet Market (Personnel)',
    tech: 'ReactJS - Java',
    link: '',
    github: 'https://github.com/Jokast38/frontend-prep.git'
  },
  {
    title: 'Jeams Project',
    image: jeamsImg,
    description: 'Jeams (Personnel)',
    tech: 'ReactJS - NodeJS - Jest - MongoDB',
    github: 'https://github.com/Jokast38/Teams-prepa'
  },
  {
    title: 'Jules Drezy Photography Website',
    image: jdwebsiteImg,
    description: 'Site de Jules Drezy (Photographe)',
    tech: 'ReactJS - EmailJS - Vite',
    link: 'https://julesdrezyphotograph.fr/',
    github: 'https://github.com/Jokast38/jd-photography.git'
  },
  {
    title: 'La Teranga Market Place',
    image: laterangaImg,
    description: 'La Teranga (Market place Mobile)',
    tech: 'ReactJS - Python - FastAPI',
    link: 'https://lateranga-prod.onrender.com/',
    github: 'https://github.com/Jokast38/app.git'
  },
  {
    title: 'Lumin 33 Store',
    image: lumin33Img,
    description: 'Lumin 33 Test',
    tech: 'NextJS - Supabase - meta tracking',
    link: 'https://lumin33-homework.onrender.com/fr/home',
    github: 'https://github.com/Jokast38/lumin33-homework.git'
  },
  {
    title: 'Acces-Concert Event(Lumin 33)',
    image: accesImg,
    description: 'Acces-Concert Billeterie Event',
    tech: 'NextJS - Supabase - meta tracking',
    link: 'https://acces-concert.fr',
    // github: 'https://github.com/Jokast38/lumin33-homework.git'
  },   
  {
    title: 'Nature Explorer Mobile App',
    image: natureImg,
    description: 'Nature Explorer Project',
    tech: 'React Native - Expo - NodeJS',
    github: 'https://github.com/Jokast38/natexfront'
  },
  {
    title: 'Sweetlawcookie.fr',
    image: sweetlawcookieImg,
    description: 'Sweet Law Cookie',
    tech: 'NextJS - Paypal - Gmail API',
    link: 'https://sweetlawcookie.fr',
    github: 'https://github.com/Jokast38/sweetlawcookie.fr.git'
  },
  {
    title: 'Prochaine Réalisation En cours',
    image: onwImg,
    description: 'Projet En cours',
    tech: '',
    link: ''
  }
];

export default projetData;