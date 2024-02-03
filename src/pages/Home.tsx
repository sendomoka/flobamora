import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation()

    return (
        <div class="flex flex-col w-full h-screen">
            <div class="pt-20 inline mx-auto">
                <h1 class="text-4xl font-bold">{t("Explore the enchanting islands of NTT")}</h1>
            </div>
        </div>
    )
}

export default Home