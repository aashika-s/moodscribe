import React from 'react'
import './faq.css'

const FAQ=()=>
{
return(
    <div className='body' >
        <h2 className='heading'>FAQ</h2>
        <div className='underline'></div>
        <div className='questions'>
            <p className='Q'>
            What is MoodScribe, and how can it help me with my mental wellness?
            </p>
            <p className='answers'>
            MoodScribe is a mental wellness website designed to help you track and understand your emotions. 
            By using features like mood tracking, journaling, and mood charts, you can gain insights into your emotional patterns. 
            Additionally, our community forum provides a supportive space to connect with others, and the habit-tracking feature helps you build positive routines that improve overall well-being.
            </p>
            <p className='Q'>
            How does MoodScribe’s mood tracking feature work, and what can I learn from it?
            </p>
            <p className='answers'> 
            Mood tracking on MoodScribe allows you to select your current emotion using an emoji or mood option, which is then recorded and updated in your personal Mood Chart. Over time, this helps you recognize mood patterns, identify possible triggers, and understand how daily habits or events influence your mental health.  
            </p>
            <p className='Q'>
            What can I do with the journaling feature, and is it private?
            </p>
            <p className='answers'>
            MoodScribe’s journaling feature provides a space to write about your thoughts, experiences, and emotions. You can personalize entries with fonts, colors, emojis, and images. All journal entries are private to you, unless you choose to share them with the community for feedback or support.  
            </p>
            <p className='Q'>
            How does the “My Habits” section support mood tracking, and can I customize it? 
            </p>
            <p className='answers'>
            The "My Habits" section allows you to track daily routines and activities that contribute to your mental wellness, such as exercise, meditation, or sleep. This feature is fully customizable, so you can add and adjust habits based on your goals. Tracking these habits alongside your mood entries provides deeper insights into how certain activities impact your emotions.
            </p>
            <p className='Q'>
            What is the Community Forum, and how do I participate?
            </p>
            <p className='answers'>
            The Community Forum on MoodScribe is a safe, supportive space where users can share experiences, ask questions, and encourage each other on their mental wellness journeys. You can participate by creating posts, responding to others, and even posting anonymously if preferred. The forum fosters a community of understanding and shared growth.
            </p>
        </div>
        <footer>
        <p className='footer'>© 2024 MoodScribe. All rights reserved.
        </p>

        </footer>
    </div>
)
}

export default FAQ;