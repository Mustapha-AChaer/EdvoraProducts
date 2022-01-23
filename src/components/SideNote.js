import classes from "./SideNote.module.scss";

const SideNote = () => {
  return (
    <div className={classes.sidenote}>
      <p>
        Note to the Edvora Team: I currently have an exam so during the given 72
        hours I wont be able to complete the given task, I fetched the states
        and cities from the API but I didnt have time to add a filtering
        function and product display process, in addition I could have easily
        made the site responsive but that would be time consuming for me with
        the exam date coming up, but after the exam I would be totally free to
        be commited to this team and I am excited to do so, My goal is to keep
        improving and helping the team as much as possible with every thing I
        can. I promise commitment and loyalty to the company and the upmost
        professionalism, Sincerly Mustapha Abou Chaer <br /> Email:
        mustapha.abouchaar@lau.edu <br /> Number: +961 78897310
      </p>
    </div>
  );
};

export default SideNote;
