import "./ChatBubble.css";
import { Tooltip } from "react-tooltip";

interface ChatBubbleProps {
  children: string;
  is_curr_user: boolean;
  is_server: boolean;
  message_time: string;
  start_animation: boolean;
  avatar: string | undefined;
  name: string | undefined;
}

const ChatBubble = (props: ChatBubbleProps) => {
  if (!props.is_server) {
    const time_parsed = new Date(
      Date.parse(props.message_time)
    ).toLocaleString();

    let out_avatar = "";
    if (
      !props.is_curr_user &&
      typeof props.avatar !== "undefined" &&
      props.avatar != null
    ) {
      out_avatar = props.avatar;
    }

    if (props.is_curr_user) {
      let classes = "bubble you";

      if (props.start_animation) {
        classes += " bubbleAnimationRight";
      }
      return (
        <>
          <div data-tooltip-id={time_parsed} className={classes}>
            {props.children}
          </div>
          <Tooltip id={time_parsed} place="left" content={time_parsed} />
        </>
      );
    } else {
      let classes = "bubble others";

      if (props.start_animation) {
        classes += " bubbleAnimationLeft";
      }

      return (
        <>
          <div className="othersWrapper">
            <img
              className="chatAvatar"
              src={out_avatar}
              data-tooltip-id={"u"+time_parsed}
            ></img>
            <div className={classes} data-tooltip-id={time_parsed}>
              {props.children}
            </div>
          </div>
          <Tooltip id={time_parsed} place="right" content={time_parsed} />
          <Tooltip id={"u"+time_parsed}  place="top-start" content={props.name} />

        </>
      );
    }
  } else {
    return <div className="serverMessage mb-3">{props.children}</div>;
  }
};

export default ChatBubble;
