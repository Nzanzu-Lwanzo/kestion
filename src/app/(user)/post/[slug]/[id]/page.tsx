import "@/assets/style/post.css";
import PostCard from "../../_ui/PostCard";

const Post = () => {
  return (
    <section className="post__section">
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corrupti
        aut nemo dignissimos sunt ullam
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        dolorem minima quisquam incidunt error ut laboriosam eos facilis
        perferendis voluptatum omnis explicabo, eaque eum dolore cumque eveniet,
        quo temporibus sapiente. Quisquam aliquam maxime, est facilis, quaerat
        suscipit quasi fuga, iste a laborum itaque quod deleniti minima impedit
        praesentium excepturi aut autem! Sit doloribus excepturi id eaque
        necessitatibus quis, maiores iure? Assumenda dolorem officiis, eaque
        mollitia commodi sint. Est dolore magnam laudantium dicta temporibus
        libero nemo earum neque aut! Officia recusandae alias placeat maxime qui
        molestias cumque vitae fugit. Debitis, earum! Aut reprehenderit adipisci
        in sit accusantium eaque voluptatum voluptate libero consequuntur nihil
        mollitia dolorum architecto ipsa, nemo officiis dignissimos, eos
        voluptatibus voluptates doloremque ullam, at harum! Deserunt ipsam
        consectetur quae. Deleniti, vero molestias quibusdam ab fugit iusto
        vitae quis esse ipsum consequuntur cupiditate dolorem, commodi, id
        expedita sapiente consequatur ad repudiandae nam! Unde error labore
        excepturi nisi placeat quos dolore. Praesentium voluptate magni quis
        mollitia soluta beatae! Iste sunt neque quaerat mollitia consectetur
        officia corporis aperiam perferendis qui vel, labore aut itaque, odio
        ipsam! Totam incidunt amet nulla unde ex. Expedita, error eaque rerum
        animi optio a laudantium debitis temporibus nulla, dolores maiores
        explicabo nemo, dicta molestias quia! Qui ab, amet non vitae architecto
        commodi iure veritatis officiis asperiores in. Deleniti repellendus
        maiores commodi similique a voluptatum accusantium alias ullam, quae ut
        consectetur quibusdam eaque, dignissimos nobis dolorem natus error
        voluptates veniam asperiores aut officiis, inventore quas. Quos, impedit
        laboriosam. Aliquid quo ducimus, quos, impedit voluptatum accusantium,
        vitae saepe dolorum facilis doloremque sequi. Aliquid officia, ratione
        dolorem dolor unde similique sapiente ut rerum libero? Accusamus libero
        enim aspernatur! Minima, pariatur. Nesciunt culpa quod cum magnam sit ex
        ipsum tenetur provident quas fugit, quae molestias voluptates quis esse
        fuga aperiam adipisci excepturi sequi molestiae iure minima corporis. Ex
        tempora rerum ducimus.
      </p>

      <div className="actions">
        <button type="button" className="action like center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
          </svg>
        </button>
        <button className="action share center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z"></path>
          </svg>
        </button>
        <button className="action ask center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Zm28-72c0,17.38-13.76,31.93-32,35.28V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36S168,88.15,168,108Z"></path>
          </svg>
        </button>
        <button className="action download center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"></path>
          </svg>
        </button>
      </div>

      <div className="show_more">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
};

export default Post;
