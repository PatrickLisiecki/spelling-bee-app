import Lottie from "lottie-react";
import loading from "@/assets/loading.json";

import { useTranslation } from "react-i18next";

export default function Loading() {
  const { t } = useTranslation("common");

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <span className="h3 mb-0">{t("app.loading")}</span>
      <div className="max-h-[300px] max-w-[400px] xl:max-h-[475px] xl:max-w-[500px]">
        <Lottie animationData={loading} />
      </div>
    </div>
  );
}
