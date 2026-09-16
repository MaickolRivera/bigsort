import type { TFunction } from "i18next";
import type { MessageKey } from "../types";

export function translateMessage(t: TFunction, message: MessageKey | null) {
  if (!message) return null;
  return {
    title: t(message.titleKey, message.params),
    description: t(message.descriptionKey, message.params),
  };
}