import React from 'react';
import Header from '../Shared/Header/Header';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
    <div>
        <Header></Header>
        <div className='w-50 mx-auto'>
            <div className='text-center'> <h1>FAQ</h1></div>
            <div >
            <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
        <Accordion.Header>এই কোর্স কাদের জন্য ?</Accordion.Header>
        <Accordion.Body>
        যারা ওয়েব ডেভেলপার হতে চায়। যারা একদম শূন্য থেকে শুরু করে শেষ পর্যন্ত ওয়েব ডেভেলপমেন্ট শিখে তারপর ওয়েব ডেভেলপার হিসেবে কোন সফটওয়্যার কোম্পানিতে চাকরি করতে চায়, তাদের জন্য। যারা প্রোগ্রামিং বা ওয়েব ডেভেলপমেন্ট সম্পর্কে তেমন কিছুই জানে না, তাদের জন্য। এমনকি যারা চার বছর CSE পড়েও কিভাবে কি করবে দিশা করতে পারতেছে না, গুছিয়ে তেমন কিছু শিখেনি, তারাও এই কোর্স থেকে কমপ্লিট ওয়েব ডেভেলপমেন্ট শিখে চাকরিতে এপ্লাই করতে পারবে। 😀


    </Accordion.Body>
        </Accordion.Item>
    <Accordion.Item eventKey="1">
    <Accordion.Header>এই কোর্স শুরু করার আগে কি কি পূর্ব অভিজ্ঞতা থাকতে হবে ?
</Accordion.Header>
    <Accordion.Body>
    আমরা যেহেতু একদম শূন্য থেকে শেখাচ্ছি। তাই তোমাকে আগে থেকে তেমন কিছু জানা লাগবে না। তবে তোমার হাতে যদি সময় থাকে তাহলে এই তিনটা কাজ করে ফেলতে পারো। ১. ভিডিও দেখে দেখে জিনিসগুলো মাথায় ঢুকানোর জন্য একটুখানি ব্রেনের খালি জায়গা রাখতে হবে। ২. কোর্স এ জয়েন করলেই অটো ওয়েব ডেভেলপার হয়ে যাবে না। হার্ডওয়ার্ক করার, লেগে থাকার মেন্টালিটি থাকতে হবে। ৩. কোথাও আটকে গেলে হেল্প চাওয়ার মেন্টালিটি এবং লেগে থাকার ইচ্ছা রাখতে হবে।
        
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
    <Accordion.Header>কোর্সের মধ্যে কি কি আছে ?</Accordion.Header>
    <Accordion.Body>
    সেটা কোর্স কারিকুলাম দেখলেই বুঝতে পারবে। তবে ছোট করে বললে, বলা যায়: বর্তমান সময়ে একজন সিরিয়াস ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগে, তার সবই আছে এই কোর্সে। একদম ছোট করে বললে ধরো HTML, CSS থেকে শুরু করে bootstrap, JavaScript, Git, ES6, REST API, server, JSON তো আছেই। তার সাথে সাথে আছে বর্তমান সময়ে সবচেয়ে বেশি চাকরি যে ফ্রেমওয়ার্ক সেই React, advanced React দিয়ে কমপ্লিট ওয়েবসাইট বানানোর সিস্টেম আছে। বাড়তি হিসেবে আছে node, database (mongodb), debug, problem solving, interview questions সহ আরো অনেক জিনিস। আর পুরা কোর্সে তোমাকে ১১টা ওয়েবসাইট করে দেখানো হবে। আরো ১১টা ওয়েবসাইট থাকবে তোমার হোমওয়ার্ক হিসেবে। এই পুরা জিনিস কোন রকমে শেষ করতে পারলে, একজন উন্নতমানের জুনিয়র ওয়েব ডেভেলপার না হয়ে উপায় থাকবে না।
        
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
    <Accordion.Header>কোর্সের ভিডিও গুলো কিভাবে পাব ?</Accordion.Header>
    <Accordion.Body>
    কোর্সের ভিডিও গুলো প্রি-রেকর্ড থাকবে। তুমি একাউন্ট খুলে এই কোর্সে এনরোল করলে। ভিডিওগুলো কোর্স শুরু হওয়ার পরে থেকে প্রতিদিন একটা করে মডিউল দেয়া হবে। প্রত্যেকটা মডিউলে সাধরনত ১০ থেকে ১২ টা ভিডিও থাকে। এই ভিডিওগুলো যেদিন রিলিজ দেয়া হয়ে সেই দিনের মধ্যে তোমাকে দেখে ফিনিশ করতে হবে। তাই সেই হিসেবে কোর্সের জন্য প্রতিদিন ডেডিকেটেড সময় রাখতে হবে। এবং সেই সময়ের মধ্যে তুমি চাইলে শুয়ে-বসে, দাঁড়িয়ে-হেলিয়ে, পা দুলিয়ে, কোমর নাচিয়ে, কিংবা খাটের তলায় লুকিয়েও ভিডিও দেখতে পারবে।
        
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
    <Accordion.Header>আপনাদের কোর্স করে কি সবাই চাকুরী পাই ?</Accordion.Header>
    <Accordion.Body>
    না। ১০০% সবাই চাকরি পায় না। তবে যারা মেইন কোর্স ফিনিশ করে। এবং SCIC ঠিক মতো ফিনিশ করে তাদের ৭০% চাকরি বা ইন্টার্ন পেয়ে যায়। বাকি যারা থাকে তাদের কেউ কেউ হয়তো ভার্সিটিতে প্রথম দিকে বা স্কুল কলেজে এবং তারা এখন চাকরি বা ইন্টার্ন খুজতেছে না। তবে যারা অনটাইমে কোর্স ফিনিশ করতে পারে না। তাদের জন্যও আমাদের সাপোর্ট থাকে এবং এদের থেকেও কেউ কেউ মাঝে মধ্যে চাকরি বা ইন্টার্ন পেয়ে যায়।
        
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="5">
    <Accordion.Header>এই কোর্স শেষ করতে কতদিন সময় লাগবে ?</Accordion.Header>
    <Accordion.Body>
    তুমি যদি প্রতিদিন ১ থেকে দেড় ঘন্টা ধরে ভিডিও দেখো, তার সাথে সাথে এক্সট্রা ৪ থেকে ৬ ঘন্টা প্রাকটিস করো, তাহলে তোমার ৫ মাসের মতো সময় লাগবে। তবে মাঝে মধ্যে হোমওয়ার্ক আর টেক এওয়ে প্রজেক্ট এর জন্য বাড়তি সময় বরাদ্ধ রাখতে হবে। হার্ডওয়ার্ক করার মেন্টালিটি নিয়ে আসতে হবে। ফাঁকিবাজি বা শর্টকাট করার কোন উপায় নাই।
        
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="6">
    <Accordion.Header>কোর্সটি করতে শিক্ষাগত যোগ্যতা কেমন থাকা লাগবে ?</Accordion.Header>
    <Accordion.Body>
    আমরা কোর্সটি এমনভাবে সাজিয়েছি যেখানে একাডেমিক ব্যাকগ্রাউন্ড ম্যাটার করে না। তুমি যেকোনো একাডেমিক ব্যাকগ্রাউন্ড থেকে এই কোর্সটি করতে পারবে। চাইলে ভার্সিটির স্টুডেন্ট, কলেজের স্টুডেন্ট, চাকরিজীবি, বেকার, প্রেমিক, পলাতক প্রেমিক, এমনকি ফোন ধরে না এমন প্রেমিকা সবাই যাতে শিখতে পারে সেজন্য একদম শূন্য থেকে শুরু করা হয়েছে। তবে অবশ্যই সময় দিতে হবে ৬-৮ ঘন্টা। মিনিমাম ৪-৫ ঘন্টা।
        
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="7">
    <Accordion.Header>আমার কি কি জিনিস লাগবে ?</Accordion.Header>
    <Accordion.Body>
    প্রথমত লাগবে ডেডিকেটেড সময়। প্রতিদিন মাস্ট ৬-৮ ঘন্টা। সম্ভব হলে ৮-১০ঘন্টা( সময় না দিতে পারলে। হার্ডওয়ার্ক করার ইচ্ছা না থাকলে কোর্সে এনরোল করে কোন লাভ হবে না।) দ্বিতীয়ত লাগবে একটা ল্যাপটপ বা একটা কম্পিউটার (যেখানে node, Visual Studio Code টাইপের সফটওয়্যার ইনস্টল করা যায়) আর তৃতীয়ত লাগবে মিনিমাম ২-১০ এমবিপিএস এর ইন্টারনেট। ব্রডব্যান্ড হলেই ভালো যাতে কোর্সের ভিডিও ভালোভাবে দেখা যায়। প্রফেশনাল ওয়েব ডেভেলপার হতে হলে মিনিমাম ৪ মাস সিরিয়াস হার্ডওয়ার্ক এর কথা মাথায় রেখে নামতে হবে।
        
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="8">
    <Accordion.Header>এটি সম্পুর্ণ ফ্রি কোর্স না কেন ?</Accordion.Header>
    <Accordion.Body>
    এই কোর্সটা জাস্ট ভিডিও দেখার কোর্স না। কারণ এই কোর্সের পিছনে সব মিলিয়ে ৩০ জন প্রফেশনাল ডেভেলপার করছে। তোমার ১১টা এসাইনমেন্ট দেখবে। এসাইনমেন্ট এর মার্কস প্লাস ফিডব্যাক দিবে। আরো সাতজন ওয়েব ডেভেলপার থাকবে যারা তোমার যেকোন প্রশ্নের উত্তর ২৪ ঘন্টার মধ্যে দেয়ার জন্য রেডি থাকবে। তোমার কোড এ সমস্যা হলে সেটা স্ক্রীনশেয়ার করে সলভ করে নেয়ার জন্য ডেডিকেটেড ডেভেলপার থাকবে। এছাড়াও কোর্সের ওয়েবসাইট বানানোর জন্য ডেভেলপার, ভিডিও এডিটর, কোর্স মডারেটর, লাইভ কন্সেপচুয়াল সেশন, জব প্লেসমেন্ট সাপোর্ট, সব মিলিয়ে যতজন লোক কাজ করে তাদের সংসার তো আর ফ্রি ফ্রি চলতে পারবে না। সেজন্য এই কোর্সে নূন্যতম একটা ফি আমাদের রাখতেই হচ্ছে।
    </Accordion.Body>
    </Accordion.Item>
</Accordion>
            </div>
        </div>
    </div>
    );
};

export default Faq;