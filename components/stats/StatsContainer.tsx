import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  BadgeQuestionMark,
  CircleOff,
  Handshake,
  Send,
  ShieldQuestionMark,
} from "lucide-react";

const StatsContainer = ({
  data,
}: {
  data: {
    pending: number;
    interview: number;
    declined: number;
    offered: number;
    applied: number;
  };
}) => {
  console.log(data);

  return (
    <div className="space-y-2">
      <h2 className="font-bold text-2xl lg:text-3xl">Job Statistics</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
        <Card className="bg-transparent border border-sidebar-accent-foreground py-4">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Applied{" "}
              <span>
                {" "}
                <Send />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.applied}</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border border-sidebar-accent-foreground py-4">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Interview{" "}
              <span>
                {" "}
                <BadgeQuestionMark />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.interview}</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border border-sidebar-accent-foreground py-4">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Offered{" "}
              <span>
                {" "}
                <Handshake />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.offered}</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border border-sidebar-accent-foreground py-4">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Pending{" "}
              <span>
                {" "}
                <ShieldQuestionMark />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.pending}</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border border-sidebar-accent-foreground py-4">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Declined{" "}
              <span>
                {" "}
                <CircleOff />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.declined}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsContainer;
