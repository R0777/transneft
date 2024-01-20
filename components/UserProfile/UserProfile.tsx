/* eslint-disable @next/next/no-img-element */
import { useState, useLayoutEffect, ChangeEvent } from "react";
import styles from "./styles.module.scss"

const UserProfile = () => {

  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userJob, setUserJob] = useState("");

  const getProfileData = () => {
    setAvatar(localStorage.getItem("avatar") || "")
    setUserName(localStorage.getItem("userName") || "")
    setUserJob(localStorage.getItem("userJob") || "")
  }

  const handleSaveData = () => {
    localStorage.setItem('avatar', avatar);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userJob', userJob);
  };

  useLayoutEffect(() => {
    getProfileData()
  },[])

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleJobChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserJob(event.target.value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAvatar(event.target.value);
  };

  return (
    <section className={styles.profile}>
      <div className={styles.profile__avatar}>
        <img src={avatar ? avatar : "/blank_ava.jpg"} alt="Avatar" className={styles.profile__avatar_img} />
      </div>
      <div className={styles.profile__info}>
        <input
          type="text"
          placeholder="ФИО Сотрудника"
          className={styles.profile__name}
          value={userName}
          onChange={handleNameChange}
        />
        <textarea
          rows={5}
          className={styles.profile__job}
          placeholder="Тут вы можете рассказать о себе и ваших хобби"
          value={userJob}
          onChange={handleJobChange}

        ></textarea>
        <input
          type="text"
          className={styles.profile__avatar_input}
          placeholder="Укажите ссылку на ваше фото или изображение"
          value={avatar}
          onChange={handleImageChange}
        />

        <button onClick={handleSaveData} className={styles.saveButton}>Сохранить</button>

      </div>
    </section>
  );
};

export default UserProfile;