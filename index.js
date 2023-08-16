import '../index.css'

import Alpine from 'alpinejs'

import app from './app';
Alpine.data('app', app);

import about from '../components/about/about';
Alpine.data('about', about);

import lightbox1 from '../components/about/lightbox1/lightbox1';
Alpine.data('lightbox1', lightbox1);

import lightbox1slide1 from '../components/about/lightbox1/slide1/slide1';
Alpine.data('lightbox1slide1', lightbox1slide1);

import lightbox1slide2 from '../components/about/lightbox1/slide2/slide2';
Alpine.data('lightbox1slide2', lightbox1slide2);

import lightbox1slide3 from '../components/about/lightbox1/slide3/slide3';
Alpine.data('lightbox1slide3', lightbox1slide3);

// import lightbox2 from '../components/about/lightbox2/lightbox2';
// Alpine.data('lightbox2', lightbox2);

// import lightbox2slide1 from '../components/lightbox2/lightbox2/slide1/slide1';
// Alpine.data('lightbox2slide1', lightbox2slide1);

// import lightbox2slide2 from '../components/lightbox2/lightbox2/slide2/slide2';
// Alpine.data('lightbox2slide2', lightbox2slide2);

// import lightbox1slide3 from '../components/lightbox2/slide3/slide3';
// Alpine.data('lightbox1slide3', lightbox1slide3);

import beneficiary from '../components/beneficiary/beneficiary';
Alpine.data('beneficiary', beneficiary);

import assets from '../components/assets/assets';
Alpine.data('assets', assets);

import gifts from '../components/gifts/gifts';
Alpine.data('gifts', gifts);

import guardians from '../components/guardians/guardians';
Alpine.data('guardians', guardians);

import executors from '../components/executors/executors';
Alpine.data('executors', executors);

import stipulations from '../components/stipulations/stipulations';
Alpine.data('stipulations', stipulations);

import splitting from '../components/splitting/splitting';
Alpine.data('splitting', splitting);

import preview from '../components/preview/preview';
Alpine.data('preview', preview);

import onboarding_get_started from '../components/onboarding_get_started/onboarding_get_started';
Alpine.data('get_started', onboarding_get_started);

import onboarding_relattion_status from '../components/onboarding_relattion_status/onboarding_relattion_status';
Alpine.data('relationdata', onboarding_relattion_status);

import onboarding_parental_status from '../components/onboarding_parental_status/onboarding_parental_status';
Alpine.data('parentaldata', onboarding_parental_status);

import onboarding_will_type from '../components/onboarding_will_type/onboarding_will_type';
Alpine.data('willdata', onboarding_will_type);

import onboarding_parent_status from '../components/onboarding_parent_status/onboarding_parent_status';
Alpine.data('parentdata', onboarding_parent_status);

import onboarding_children_previous from '../components/onboarding_children_previous/onboarding_children_previous';
Alpine.data('childrendata', onboarding_children_previous);

import onboarding_guardians_required from '../components/onboarding_guardians_required/onboarding_guardians_required';
Alpine.data('guardiansdata', onboarding_guardians_required);

import onboarding_guardian_pets_required from '../components/onboarding_guardian_pets_required/onboarding_guardian_pets_required';
Alpine.data('guardianpetsdata', onboarding_guardian_pets_required);

import onboarding_leave_to_one_person from '../components/onboarding_leave_to_one_person/onboarding_leave_to_one_person';
Alpine.data('persondata', onboarding_leave_to_one_person);

import onboarding_property_owner from '../components/onboarding_property_owner/onboarding_property_owner';
Alpine.data('propertydata', onboarding_property_owner);

import router from './router';

import { handleXInclude,setupDOMObserver } from './include';


document.addEventListener('alpine:init', () => {
    handleXInclude();
    setupDOMObserver();
});

window.$router = router(Alpine);

window.Alpine = Alpine
Alpine.start()