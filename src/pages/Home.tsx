import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation()

    return (
        <div class="flex flex-col w-full h-screen">
            <div class="pt-60 inline ml-10 sm:ml-10 md:ml-10 lg:ml-20">
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-balance font-extrabold capitalize sm:leading-tight md:leading-snug lg:leading-tight tracking-wide">{t("Explore the enchanting islands of NTT")}</h1>
            </div>
        </div>
    )
}

export default Home