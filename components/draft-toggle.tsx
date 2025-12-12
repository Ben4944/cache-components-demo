import { draftMode } from "next/headers";

export async function DraftToggle() {
  const { isEnabled: draft } = await draftMode();

  async function toggleDraft() {
    "use server";
    const draft = await draftMode();
    if (draft.isEnabled) {
      draft.disable();
    } else {
      draft.enable();
    }
  }

  return (
    <button onClick={toggleDraft}>
      {draft ? "Disable Draft" : "Enable Draft"}
    </button>
  );
}
