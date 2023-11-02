import Container from "../container/container";
import { DialogWithForm } from "../dialog-with-form/dialog-with-form";
import { Button } from "../ui/button";
import Typography from "../ui/typography";

const Hero = () => {
  return (
    <Container className="relative py-32 lg:flex  lg:items-center">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center justify-center sm:mt-10">
        <Typography variant="h1" className="text-3xl lg:text-6xl">
          Cabinet d&apos;avocat A. Harred{" "}
        </Typography>

        <Typography variant="p" className="mt-4 sm:text-xl/relaxed max-w-3xl">
          Bienvenue sur le site du Cabinet d&apos;avocat A. Harred, avocat
          dévoué à la protection de vos droits et intérêts.Faites équipe avec
          nous pour faire valoir vos droits et obtenir la justice que vous
          méritez.
        </Typography>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <DialogWithForm dialogTitle="Titre" dialogDescription="lorem ipsum">
            <Button>Nous Contacter</Button>
          </DialogWithForm>
          <Button variant="secondary">Voir Nos Services</Button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
