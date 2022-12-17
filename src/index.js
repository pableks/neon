import "./styles.scss";
import FalseContact from "./falseContact.js";

const word1 = document.querySelector(".word1");
const word2 = document.querySelector(".word2");
const word3 = document.querySelector(".word3");

const fc1 = new FalseContact(word1, 200, 10, 0.8).start();
const fc2 = new FalseContact(word2, 300, 10, 0.5).start();

word1.addEventListener("mouseleave", () => fc1.start());
word2.addEventListener("mouseleave", () => fc2.start());
