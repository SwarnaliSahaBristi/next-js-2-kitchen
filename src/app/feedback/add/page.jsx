import FeedbackForm from '@/app/components/forms/FeedbackForm';
import React from 'react';

const AddFeedback = () => {
    return (
        <div>
            <h2 className='text-3xl py-3 text-center font-bold'>Add Feedback</h2>
            <FeedbackForm></FeedbackForm>
        </div>
    );
};

export default AddFeedback;