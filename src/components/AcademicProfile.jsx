import { useState } from "react";

function AcademicProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState(null);
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = "Enter at least 3 characters";
    }

    if (!age || age < 10 || age > 100) {
      newErrors.age = "Age must be between 10 and 100";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setProfile({ name, age });
    setName("");
    setAge("");
  };

  return (
    <main className="page">
      <header className="heading">
        <h1>Academic Profile</h1>
        <p>Student data generated using React state</p>
      </header>

      <section className="panel">
        <form onSubmit={submitHandler}>
          <label>
            Full Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span>{errors.name}</span>}
          </label>

          <label>
            Age
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={errors.age ? "error" : ""}
            />
            {errors.age && <span>{errors.age}</span>}
          </label>

          <button type="submit">Generate Profile</button>
        </form>

        {profile && (
          <div className="output">
            <h3>Student Snapshot</h3>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Age:</strong> {profile.age}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default AcademicProfile;
