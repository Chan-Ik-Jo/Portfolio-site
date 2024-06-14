import { motion } from "framer-motion";
import "../css/Content.css";
import { Link, useNavigate } from 'react-router-dom';


function HOME() {
      const navigate = useNavigate();
      const goUrl = () => {
        navigate('/drive');
      }

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="c">
          <div className="box1_par">
            <div className="box_1">
              <h1>Accordi On</h1>
              <p><strong>Welcome</strong> to my personal page.<br/> I have records and a page that introduces me, so I would appreciate it if you could take a look.</p>
            </div>
          </div>
          <div className="box2_par">
            <Link to="/portfolio">
            <div className="box_2">
              <div className="box_flip_inner">
                <div className="box_flip_front_1">
                  <h2>Portfolio</h2>
                </div>
                <div className="box_flip_back_1">
                  <h2 className="text">
                    My introduce page
                  </h2>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="box3_par">
            <Link to="/repository">

            <div className="box_3">
              <div className="box_flip_inner">
                <div className="box_flip_front_2">
                  <h2>Project Repository</h2>
                </div>
                <div className="box_flip_back_2">
                <h2>All the records I've made so far</h2>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="box4_par" >
            <div className="box_4" onClick={() => goUrl()} >
              <div className="box_flip_inner">
                <div className="box_flip_front_3">
                  <h2>Drive</h2>
                </div>
                <div className="box_flip_back_3">
                  <h2 className="text">
                    My importent files
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HOME;
