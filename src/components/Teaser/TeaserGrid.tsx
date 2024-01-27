import React, {FC} from 'react'
import Grid from "../Grid/Grid";
import Column from "../Grid/Column";
import Teaser from "./Teaser";
import Pagination from "../Pagination/Pagination";

interface TeaserGridProps {
}

const TeaserGrid: FC<TeaserGridProps> = () => {
  return (
    <>
        <Grid columns={{sm: 2, md: 3, xl: 4}}>
            <Column>
                <Teaser
                    title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
                    content={', sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
                />
            </Column>
            <Column>
                <Teaser
                    title={'Lorem ipsum dolor sit amet'}
                    content={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '}
                />
            </Column>
            <Column>
                <Teaser
                    title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
                    content={', sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
                />
            </Column>
            <Column>
                <Teaser
                    title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
                    content={', sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
                />
            </Column>
        </Grid>
        <Pagination items={20}/>
    </>
  )
}

export default TeaserGrid
