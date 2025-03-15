export function getMathContent() {
    const content = document.querySelector("#content");

    const syllabus = document.createElement("div");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.border = "1";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.textContent = "SSC CGL Tier-I Syllabus - Quantitative Aptitude";
    headerCell.style.padding = "8px";
    headerCell.style.backgroundColor = "#f2f2f2";
    headerRow.appendChild(headerCell);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    
    const topics = [
        "Computation of whole numbers", "Decimals", "Fractions", "Relationships between numbers",
        "Profit and Loss", "Discount", "Partnership Business", "Mixture and Alligation",
        "Time and distance", "Time & Work", "Percentage", "Ratio & Proportion",
        "Square roots", "Averages", "Interest", "Basic algebraic identities of School Algebra & Elementary surds",
        "Graphs of Linear Equations", "Triangle and its various kinds of centres",
        "Congruence and similarity of triangles", "Circle and its chords, tangents, angles subtended by chords of a circle, common tangents to two or more circles",
        "Triangle", "Quadrilaterals", "Regular Polygons", "Right Prism",
        "Right Circular Cone", "Right Circular Cylinder", "Sphere",
        "Heights and Distances", "Histogram", "Frequency polygon",
        "Bar diagram & Pie chart", "Hemispheres", "Rectangular Parallelepiped",
        "Regular Right Pyramid with triangular or square base", "Trigonometric ratio",
        "Degree and Radian Measures", "Standard Identities", "Complementary angles"
    ];

    topics.forEach(topic => {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = topic;
        cell.style.padding = "8px";
        row.appendChild(cell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    syllabus.appendChild(table);
    content.appendChild(syllabus);

    // Course Recommendations Section
    const courseDiv = document.createElement("div");
    courseDiv.style.marginTop = "20px";

    const courseTitle = document.createElement("h2");
    courseTitle.textContent = "Recommended Courses";
    courseDiv.appendChild(courseTitle);

    const courses = [
        { name: "Number System", url: "https://www.youtube.com/embed/videoseries?list=PLjkn61QK6tQ4Iy5RdfBoIydORTyU6amCf" },
        { name: "Profit and Loss", url: "https://www.youtube.com/embed/videoseries?list=PLoMiZRRlvbStAahin7dwAyWV5pVzC3RkV" },
        { name: "Discount", url: "https://www.youtube.com/embed/1klj6rbGr-w?si=8UOPMWN7ux4jYvFz://www.youtube.com/embed/videoseries?list=PLoMiZRRlvbStAahin7dwAyWV5pVzC3RkV" },

    ];

    courses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.style.marginTop = "10px";

        const courseName = document.createElement("h3");
        courseName.textContent = course.name;
        courseItem.appendChild(courseName);

        const iframe = document.createElement("iframe");
        iframe.src = course.url;
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        
        courseItem.appendChild(iframe);
        courseDiv.appendChild(courseItem);
    });
    
    content.appendChild(courseDiv);
}
