import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'EuroPython Society',
            logo: {
                src: './src/assets/eps_logo.svg',
            },
            customCss: [
                './src/styles/custom.css',
            ],
            social: {
                github: 'https://github.com/europython/resources',
            },
            sidebar: [
                {
                    label: 'About EPS',
                    items: [
                        { label: 'The Society', slug: 'about/society' },
                        { slug: 'about/mission' },
                        { slug: 'about/contact' },
                        { slug: 'about/trademarks' },
                        { label: 'Code of Conduct', slug: 'about/coc' },
                        { label: 'Code of Conduct Procedure', slug: 'about/coc-enforcement-procedure' },
                        { label: 'Code of Conduct Reporting', slug: 'about/coc-incident-reporting' },
                        //{ slug: 'about/coc-pre-2023' },
                        //{ slug: 'about/cfp' },
                        { slug: 'about/europython' },
                        { slug: 'about/europython-teams' },
                        { label: 'Privacy Policy', slug: 'about/privacy' },
                        { slug: 'about/records' },
                        { slug: 'about/resources' },
                        { slug: 'about/imprint' },
                    ],
                },
                {
                    label: 'Membership & Grants',
                    items: [
                        { label: 'Membership application', slug: 'about/application' },
                        { label: 'Grants', slug: 'about/grants' },
                        { label: 'Fellow Grant', slug: 'about/europython-society-fellow-grant' },
                        { slug: 'about/eps-members' },
                        { slug: 'about/roster' },
                    ],
                },
                {
                    label: 'Conference',
                    autogenerate: { directory: 'conference' },
                },
            ],
        }),
    ],
});
