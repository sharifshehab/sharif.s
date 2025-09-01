import SectionHeading from "../../../components/SectionHeading";
import Js from "../../../assets/javascript.webp";
import TailwindCss from "../../../assets/tailwindcss.svg";
import React from "../../../assets/react-original.svg";
import Nextjs from "../../../assets/nextjs-original.svg";
import Router from "../../../assets/reactrouter-original.svg";
import Gsap from "../../../assets/Gsap.png";
import ShadCn from "../../../assets/ShadCn.png";
import Firebase from "../../../assets/firebase.png";
import Typescript from "../../../assets/Typescript.png";
import NodeJs from "../../../assets/nodejs-original.svg";
import Express from "../../../assets/express-original.svg";
import Jwt from "../../../assets/jwt.webp";
import PassportJs from "../../../assets/passport-js.png";
import NextAuth from "../../../assets/NextAuth-js.png";
import WebSocket from "../../../assets/WebSocket.png";
import Mongoose from "../../../assets/mongoose-original.svg";
import Mongodb from "../../../assets/mongodb-original.svg";
import Postgresql from "../../../assets/postgresql.png";
import Redis from "../../../assets/redis.png";
import GitHub from "../../../assets/GitHub.png";
import Figma from "../../../assets/Figma.png";
import Git from "../../../assets/git-original.svg";
import postman from "../../../assets/postman.png";


const Skills = () => {
    return (
        <section id="skill" className="container mx-auto px-5">
            <SectionHeading bgHeading="Skill" Heading="Skills I have honed"></SectionHeading>

            <div className="space-y-20">
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">FRONTEND</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <img src={React} alt="" className="w-10" />
                            <h4>React</h4>
                        </div>{/* React */}
                        <div className="flex items-center flex-col">
                            <img src={Nextjs} alt="" className="w-10" />
                            <h4>Next Js</h4>
                        </div>{/* Next Js */}
                        <div className="flex items-center flex-col">
                            <img src={Router} alt="" className="w-10" />
                            <h4>Router</h4>
                        </div>{/* Router */}
                        <div className="flex items-center flex-col">
                            <img src={Firebase} alt="" className="w-10" />
                            <h4>Firebase</h4>
                        </div>{/* Firebase */}
                        <div className="flex items-center flex-col">
                            <img src={ShadCn} alt="" className="w-10" />
                            <h4>ShadCn</h4>
                        </div>{/* ShadCn */}
                        <div className="flex items-center flex-col">
                            <img src={Gsap} alt="" className="w-10" />
                            <h4>Gsap</h4>
                        </div>{/* Gsap */}
                        <div className="flex items-center flex-col">
                            <img src={Js} alt="" className="w-10" />
                            <h4>JavaScript</h4>
                        </div>{/* Js */}
                        <div className="flex items-center flex-col">
                            <img src={Typescript} alt="" className="w-10" />
                            <h4>Typescript</h4>
                        </div>{/* Typescript */}
                    </div>
                </div>{/* FRONTEND */}
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">BACKEND</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <img src={NodeJs} alt="" className="w-10" />
                            <h4>NodeJs</h4>
                        </div>{/* React */}
                        <div className="flex items-center flex-col">
                            <img src={Express} alt="" className="w-10" />
                            <h4>Express</h4>
                        </div>{/* Express */}
                        <div className="flex items-center flex-col">
                            <img src={Jwt} alt="" className="w-10" />
                            <h4>JWT</h4>
                        </div>{/* JWT */}
                        <div className="flex items-center flex-col">
                            <img src={PassportJs} alt="" className="w-10" />
                            <h4>Passport Js</h4>
                        </div>{/* PassportJs */}
                        <div className="flex items-center flex-col">
                            <img src={NextAuth} alt="" className="w-10" />
                            <h4>Next Auth</h4>
                        </div>{/* NextAuth */}
                        <div className="flex items-center flex-col">
                            <img src={WebSocket} alt="" className="w-10" />
                            <h4>WebSocket</h4>
                        </div>{/* Js */}
                    </div>
                </div>{/* BACKEND */}
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">DATABASE</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <img src={Mongodb} alt="" className="w-10" />
                            <h4>MongoDB</h4>
                        </div>{/* Mongodb */}
                        <div className="flex items-center flex-col">
                            <img src={Mongoose} alt="" className="w-10" />
                            <h4>Mongoose</h4>
                        </div>{/* Mongoose */}
                        <div className="flex items-center flex-col">
                            <img src={Postgresql} alt="" className="w-10" />
                            <h4>PostgreSQL</h4>
                        </div>{/* Postgresql */}
                        <div className="flex items-center flex-col">
                            <img src={Redis} alt="" className="w-10" />
                            <h4>Redis</h4>
                        </div>{/* Postgresql */}
                    </div>
                </div>{/* Database */}
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">TOOLS</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <img src={Git} alt="" className="w-10" />
                            <h4>Git</h4>
                        </div>{/* Git */}
                        <div className="flex items-center flex-col">
                            <img src={Figma} alt="" className="w-10" />
                            <h4>Figma</h4>
                        </div>{/* Figma */}
                        <div className="flex items-center flex-col">
                            <img src={postman} alt="" className="w-10" />
                            <h4>Postman</h4>
                        </div>{/* postman */}
                        <div className="flex items-center flex-col">
                            <img src={GitHub} alt="" className="w-10" />
                            <h4>GitHub</h4>
                        </div>{/* GitHub */}
                    </div>
                </div>{/* Tools */}
            </div>

        </section>
    );
};

export default Skills;