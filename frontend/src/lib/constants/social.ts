// Social media links for KRIVOX

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/krivox',
    icon: 'facebook',
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/krivox',
    icon: 'instagram',
    color: '#E4405F',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/krivox',
    icon: 'linkedin',
    color: '#0A66C2',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/krivox',
    icon: 'twitter',
    color: '#1DA1F2',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/919999999999',
    icon: 'whatsapp',
    color: '#25D366',
  },
];

export const whatsappNumber = '+919999999999';
export const whatsappMessage = 'Hi KRIVOX! I am interested in your services.';