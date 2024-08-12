import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../styles/viewcourse.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewCourse() {
  const [videoProgress, setVideoProgress] = useState(0);
  const [documentProgress, setDocumentProgress] = useState(0);
  const [contentProgress, setContentProgress] = useState(0);

  const [singlecourse, setSinglecourse] = useState({});
  const [activeSection, setActiveSection] = useState("video");
  const [completion, setCompletion] = useState(0);
  const { courseId } = useParams();
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const token = userToken?.user?.tokens?.accessToken;

  // Fetch course data
  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/student/student/course/${courseId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSinglecourse(response.data);
      } catch (err) {
        console.log("Error fetching course:", err);
      }
    };
    getCourse();
  }, [courseId, token]);

  // Fetch progress data
  useEffect(() => {
    const getProgress = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/progress/${userToken.user._id}/${courseId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const progressData = response.data;
        setVideoProgress(progressData.videoProgress || 0);
        setDocumentProgress(progressData.documentProgress || 0);
        setContentProgress(progressData.contentProgress || 0);
        const overallProgress =
          (progressData.videoProgress +
            progressData.documentProgress +
            progressData.contentProgress) /
          3;
        setCompletion(overallProgress || 0);
        setActiveSection(determineActiveSection(progressData));
      } catch (err) {
        console.log("Error fetching progress:", err);
      }
    };
    getProgress();
  }, [courseId, token, userToken.user._id]);

  // Determine active section based on progress data
  const determineActiveSection = (progressData) => {
    if (progressData.videoProgress < 100) return "video";
    if (progressData.documentProgress < 100) return "documents";
    if (progressData.contentProgress < 100) return "content";
    return "video"; // default to video if everything is complete
  };

  // Calculate and update progress when a section is clicked
  const handleSectionClick = async (section) => {
    setActiveSection(section);

    let newVideoProgress = videoProgress;
    let newDocumentProgress = documentProgress;
    let newContentProgress = contentProgress;

    // Update progress only for the clicked section
    if (section === "video" && videoProgress < 100) newVideoProgress = 100;
    if (section === "documents" && documentProgress < 100)
      newDocumentProgress = 100;
    if (section === "content" && contentProgress < 100)
      newContentProgress = 100;

    // Recalculate the overall completion
    const newCompletion =
      (newVideoProgress + newDocumentProgress + newContentProgress) / 3;
    setCompletion(newCompletion);

    // Update the progress states
    setVideoProgress(newVideoProgress);
    setDocumentProgress(newDocumentProgress);
    setContentProgress(newContentProgress);

    // Update progress on the backend
    try {
      await axios.post(
        "http://localhost:5000/progress/update",
        {
          studentId: userToken.user._id,
          courseId,
          videoProgress: newVideoProgress,
          documentProgress: newDocumentProgress,
          contentProgress: newContentProgress,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log("Error updating progress:", err);
    }
  };

  return (
    <div className="viewContainer">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => handleSectionClick("video")}>Video</li>
          <li onClick={() => handleSectionClick("documents")}>Documents</li>
          <li onClick={() => handleSectionClick("content")}>Content</li>
        </ul>
        <div className="complete">
          <div>Course Progress: {completion}%</div>
          <ProgressBar now={completion} label={`${completion}%`} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="content">
        {activeSection === "video" && (
          <div>
            <video controls className="video">
              <source src={singlecourse.videos} type="video/mp4" />
            </video>
          </div>
        )}
        {activeSection === "documents" && (
          <div className="documents">
            {singlecourse.documents?.map((doc, index) => (
              <iframe
                key={index}
                src={doc}
                className="document"
                title={`Document ${index + 1}`}
                width="100%"
                height="600px"
              />
            ))}
          </div>
        )}
        {activeSection === "content" && (
          <div className="courseContent">{singlecourse.courseContent}</div>
        )}
      </div>
    </div>
  );
}

export default ViewCourse;
