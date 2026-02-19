import React from "react";
import FeedbackCard from "../components/cards/FeedbackCard";
import Link from "next/link";
import { connect } from "../lib/dbConnect";
import { getFeedback } from "@/action/server/feedback";
export const metadata = {
  title: "Feedbacks",
};

export const dynamic= "force-dynamic";
// const getFeedback = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`,{
//     // cache: "force-cache",
//     next:{revalidate:60}
//   });
//   return await res.json();
// };

const FeedbackPage = async () => {
  const feedback = await getFeedback();
  
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">
            {feedback.length} Feedbacks Found
          </h2>
          <div className="my-5">
            <Link href="/feedback/add" className="btn">
              ➕ Add Feedback
            </Link>
          </div>
        </div>
        <div className="my-3 space-y-5">
          {feedback.map((fd) => (
            <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
