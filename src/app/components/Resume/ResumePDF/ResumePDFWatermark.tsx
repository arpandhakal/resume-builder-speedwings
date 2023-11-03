import { Page, View, Document, Image } from "@react-pdf/renderer";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import { ResumePDFText } from "./common";
export const ResumePDFWatermark = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: "45%",
        left: "45%",
        transform: "translate(-45%, -45%)",
      }}
    >
      <ResumePDFText
        style={{
          color: "rgba(0, 0, 0, 0.2)",
          fontWeight: "bold",
          textTransform: "uppercase",
          transform: "rotate(-45deg)",
        }}
      >
        <Image
          src="/speed_wings_human_resource.png"
          style={{
            width: 300,
            height: 300,
            borderRadius: 40,
          }}
        />
      </ResumePDFText>
    </View>
  );
};
