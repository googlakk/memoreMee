import { FC } from "react";
interface VoiceSettingProps {
  open: boolean;
  onCancel: () => void;
}
const VoiceSettings: FC<VoiceSettingProps> = ({ open, onCancel }) => {
  return (
    <>
      <input
        type="checkbox"
        id="settignsModal"
        className="modal-toggle"
        checked={open}
      />
      <div className="modal">
        <div className="modal-box p-2 m-0 ">
          <h1>hello world</h1>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="settignsModal"
          onClick={onCancel}
        >
          Close
        </label>
      </div>
    </>
  );
};
export default VoiceSettings;
