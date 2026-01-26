
import { Location, Post, Trip } from './types';

export const MOCK_LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'Yonghe Road Shrine',
    address: 'No. 25, Lane 23, Baosheng Rd, Yonghe District',
    distance: '1.5km',
    category: 'Odd',
    lat: 25.012,
    lng: 121.513
  },
  {
    id: '2',
    name: 'Tanaka Weird Temple',
    address: 'No. 9-7, Lane 38, Beilu Rd, Changhua',
    distance: '150km',
    category: 'Odd',
    lat: 25.015,
    lng: 121.516
  },
  {
    id: '3',
    name: 'Pork Ice Shop',
    address: 'No. 1, Lane 78, Zhongshan Rd, Changhua',
    distance: '152km',
    category: 'Snack',
    lat: 25.008,
    lng: 121.508
  },
  {
    id: '4',
    name: 'Jingan Road Median',
    address: 'No. 5, Lane 18, Jingan Rd, Yonghe District',
    distance: '0.8km',
    category: 'Ugly B',
    lat: 25.001,
    lng: 121.501
  }
];

export const MOCK_TRIPS: Trip[] = [
  {
    id: 't1',
    name: 'Yonghe B-Class Sites A',
    isActive: true,
    locations: [MOCK_LOCATIONS[0], MOCK_LOCATIONS[3]]
  },
  {
    id: 't2',
    name: 'Miaoli Weird Trip',
    isActive: false,
    locations: [MOCK_LOCATIONS[1]]
  }
];

export const CATEGORIES = ['Odd', 'Snacks', 'Coffee', 'Ugly B'];

export const LATEST_B_POSTS: Post[] = [
  {
    id: 'p1',
    author: 'Keelung Ghost',
    title: 'Keelung Ghost Coffee',
    description: 'Passing through here you never thought...',
    image: 'https://picsum.photos/seed/ghost/400/300'
  },
  {
    id: 'p2',
    author: 'Monkey Hunter',
    title: 'Hualien Bizarre Monkey',
    description: 'At 88km on Route 66 there is a monkey...',
    image: 'https://picsum.photos/seed/monkey/400/300'
  },
  {
    id: 'p3',
    author: 'Fish Fan',
    title: 'Tainan Evil Milkfish',
    description: 'Milkfish hometown but has an evil...',
    image: 'https://picsum.photos/seed/fish/400/300'
  }
];
