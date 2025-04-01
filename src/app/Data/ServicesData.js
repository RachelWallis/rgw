import heatingImage from '../assets/images/services/heating.jpg';
import servicingImage from '../assets/images/services/servicing.jpg';
import landlordImage from '../assets/images/services/landlord.jpg';
import maintenanceImage from '../assets/images/services/maintenance.jpg';
import plumbingImage from '../assets/images/services/plumbing.jpg';
import powerflushImage from '../assets/images/services/powerflush.jpg';

export const ServicesImageData = [
    {
        index: '1',
        image: { src: heatingImage, alt: 'Heating Service' },
        heading: 'Central Heating',
        paragraph: 'Reliable heating services to keep your home warm and comfortable all year round.'
    },
    {
        index: '2',
        image: { src: servicingImage, alt: 'Boiler Servicing' },
        heading: 'Boiler Servicing',
        paragraph: 'Ensure your boiler is running efficiently and safely with our expert servicing.'
    },
    {
        index: '3',
        image: { src: landlordImage, alt: 'Landlord Services' },
        heading: 'Landlord Certificates',
        paragraph: 'We provide gas safety certificates for landlords, ensuring compliance with regulations.'
    },
    {
        index: '4',
        image: { src: maintenanceImage, alt: 'Maintenance' },
        heading: 'Maintenance & Repairs',
        paragraph: 'Expert repairs and maintenance to keep your heating and plumbing in top shape.'
    },
    {
        index: '5',
        image: { src: plumbingImage, alt: 'Plumbing' },
        heading: 'Plumbing Services',
        paragraph: 'From leaks to full bathroom installations, we handle all plumbing work.'
    },
    {
        index: '6',
        image: { src: powerflushImage, alt: 'Powerflushing' },
        heading: 'Powerflushing',
        paragraph: 'Improve the efficiency of your central heating with our professional powerflushing service.'
    }
];