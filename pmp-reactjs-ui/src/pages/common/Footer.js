import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <hr className="h-px ml-2 mt-9 bg-gray-200 border-0 " />
            <div className="flex mt-7 ml-7 justify-between text-sm text-gray-400">
                <div>
                    <p>2024 © MOSIP - {t('footer.allRightsReserved')}</p>
                </div>
                <div className="flex justify-between">
                    <p className="mr-7">{t('footer.documentation')}</p>
                    <p className="mr-7">{t('footer.mosipCommunity')}</p>
                    <p className="mr-7">{t('footer.contactUs')}</p>
                </div>
            </div></>
    );
}

export default Footer;