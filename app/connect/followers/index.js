"use client";

import { useEffect, useState } from "react";
import getFollowers from "./get-followers";

// https://spotify-api-wrapper.appspot.com/artist/david-kando

const followerGoal = ({ current }) => Math.pow(10, (current + "").length);

export default function Followers() {
  const [goalString, setGoalString] = useState("?/?");

  useEffect(() => {
    getFollowers().then((followers) => {
      setGoalString(`${followers}/${followerGoal({ current: followers })}`);
    });
  }, []);

  return <div className="indent">Follower progress: {goalString}</div>;
}
