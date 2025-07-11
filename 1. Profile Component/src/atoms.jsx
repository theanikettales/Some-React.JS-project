import { atom, selector } from "recoil";

export const profileAtom = atom({
    key: 'profileAtom',
    default: [{
        profileUrl: 'src/assets/aniket.jpg',
        name: 'Aniket Singh',
        age: 24,
        address: 'Gurgaon Haryana',
        followers: '60k',
        likes: '103k',
        photos: '1.5k',
    }],
})