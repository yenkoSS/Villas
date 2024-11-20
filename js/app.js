const rowsList = document.querySelectorAll(".row");
const sectionHeadingList = document.querySelectorAll(".section-heading");

const rowsOberver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.target.classList.toggle("show-row", entry.isIntersecting);
    if (entry.isIntersecting) rowsOberver.unobserve(entry.target);
  });
});

const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-section-heading", entry.isIntersecting);
    if (entry.isIntersecting) headingObserver.unobserve(entry.target);
  });
});

rowsList.forEach((row) => rowsOberver.observe(row));
sectionHeadingList.forEach((heading) => headingObserver.observe(heading));
