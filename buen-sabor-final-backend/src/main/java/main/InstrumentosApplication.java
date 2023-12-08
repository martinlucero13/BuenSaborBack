package main;

/*import entities.Configuracion;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;*/
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InstrumentosApplication {

	public static void main(String[] args) {
		SpringApplication.run(InstrumentosApplication.class, args);
                /*EntityManagerFactory emf = Persistence.createEntityManagerFactory("PersistenciaPU");
                EntityManager em = emf.createEntityManager();
                
                try{
                    em.getTransaction().begin();
                    
                    Configuracion config = new Configuracion(1, 3, "buensabor@gmail.com", "Token prueba mp" );
                    em.persist(config);
                    em.flush();
                    em.getTransaction().commit();
                }catch(Exception e){
                    em.getTransaction().rollback();
                }
                finally{
                    em.close();
                    emf.close();
                }*/
	}

}
