import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillGithub,
} from 'react-icons/ai';
import { FormCards } from '../components';
import { Box } from '@chakra-ui/react';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];
export const adminLinks = [
  {
    id: 1,
    text: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    id: 2,
    text: 'Products',
    url: '/admin/products',
  },
  {
    id: 3,
    text: 'warehouse',
    url: '/admin/warehouses',
  },
];
export const socialLinks = [
  {
    id: 1,
    icon: <AiFillGithub className='github' color='var(--clr-primary-5)' fontSize='2.5rem' />,
    text: 'GitHub',
    url: 'https://github.com/varunKT001/tomper-wear-ecommerce/',
  },
  {
    id: 2,
    icon: (
      <AiFillLinkedin className='linkedin' color='var(--clr-primary-5)' fontSize='2.5rem' />
    ),
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/varun-tiwari-454591178',
  },
  {
    id: 3,
    icon: (
      <AiFillTwitterCircle
        className='twitter'
        color='var(--clr-primary-5)'
        fontSize='2.5rem'
      />
    ),
    text: 'Twitter',
    url: 'https://twitter.com/geekvarun',
  },
  {
    id: 4,
    icon: (
      <AiFillYoutube className='youtube' color='var(--clr-primary-5)' fontSize='2.5rem' />
    ),
    text: 'YouTube',
    url: 'https://www.youtube.com/channel/UCUvO6rXuF7VuGhHQI94NIug',
  },
];

export const footerLinks = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Products',
    url: '/products',
  },
  {
    id: 4,
    text: 'Contact',
    url: '/contact',
  },
  {
    id: 5,
    text: 'Orders',
    url: '/orders',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our mission is to provide our customers the best in class products and services at a very reasonable price.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to take Green Waste Company to greater heights, by providing our customers best in class service.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: `Green Waste Company was started in December'21 with an initial aim to provide the best in class services to our customers.`,
  },
];

export const CardOne = () => {
  return <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>

  < FormCards />

  < FormCards />

   </Box>
}
export const CardTwo = () => {
  return <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>

  < FormCards />

  < FormCards />

   </Box>
}
export const CardThree = () => {
  return <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>

  < FormCards />

  < FormCards />

   </Box>
}

const domain = process.env.REACT_APP_BACKEND_HOST;
export const products_url = `${domain}getAllProducts`;
export const single_product_url = `${domain}getSingleProduct/`;
export const create_order_url = `${domain}create/order`;
export const get_order_url = `${domain}/api/orders`;
export const get_specific_order_url = `${domain}/order/user/`;
export const payment_url = `${domain}/api/payment/create-payment-intent`;
export const upload_url = `${domain}/api/upload/`;
export const default_profile_image ='https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg';
export const login_url=`${domain}login`;
export const signup_url=`${domain}register/client`;
export const update_url=`${domain}update/client`;
export const delete_url=`${domain}delete/client`;
export const orders_url = `${domain}orders`;
export const single_order_url = `${domain}order/single/`;
export const update_order_status = `${domain}order/status/`;
export const create_new_product=`${domain}create/product`;
export const update_product_url = `${domain}update/product`;
export const delete_product_url = `${domain}delete/product`;
export const admins_url = `${domain}client/getadmins`;
export const register_url = `${domain}/api/admin/register`;
export const get_all_warehouses = `${domain}warehouses`;
export const create_warehouse = `${domain}warehouses/create`;
export const delete_warehouses = `${domain}warehouses/delete`;
export const get_all_product_by_warehouse = `${domain}warehouses/getallproducts`;
export const filtered_products_url=`${domain}product/filterProducts`;
export const inquiry_product=`${domain}product/inquiry`;
export const fetch_client_url=`${domain}fetch`;
export const fetch_inquiry_url=`${domain}product/getInquiry`;
export const fetch_product_type=`${domain}product/getproductType`;
export const post_product_type=`${domain}product/ProductType`;
export const post_postal_code=`${domain}warehouses/postal`;
export const fetch_postal_code=`${domain}warehouses/getPostal`;
