import { Text, View } from "react-native";
import { s } from "./styles";
import { fontFamily } from "@/styles/font-family";
import { colors } from "@/styles/colors";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

type StepType = {
  title: string;
  description: string;
  Icon: React.ReactNode;
};

const steps: StepType[] = [
  {
    title: "Encontre estabelecimentos",
    description: "Veja locais perto de você que são parceiros Nearby.",
    Icon: <IconMapPin color={colors.red.base} />,
  },
  {
    title: "Ative o cumpom com QR Code",
    description: "Escaneie o QR Code no estabelecimento para usar o benefício.",
    Icon: <IconQrcode color={colors.red.base} />,
  },
  {
    title: "Garanta vantagens perto de você",
    description: "Ative cupons onde estiver, em diferentes estabelecimentos",
    Icon: <IconTicket color={colors.red.base} />,
  },
];

const createStep = ({ title, description, Icon }: StepType) => {
  return (
    <View
      key={title}
      style={{
        width: "100%",
        flexDirection: "row",
        gap: 12,
      }}
    >
      {Icon}

      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: fontFamily.semiBold,
            color: colors.gray[600],
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fontFamily.regular,
            color: colors.gray[500],
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default function Steps() {
  return (
    <View style={s.stepConteiner}>
      <Text style={s.stepTitle}>Veja como funciona:</Text>

      {steps.map((d: StepType) => {
        return createStep({
          title: d.title,
          description: d.description,
          Icon: d.Icon,
        });
      })}
    </View>
  );
}
