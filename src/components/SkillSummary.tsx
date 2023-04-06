import { Chip } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import SkillTags from '../text/SkillsText'

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const SkillSummary = () => {
    return (
        <SectionWrapper>
            {SkillTags.sort().map((tag, i) => (
                <Chip
                    sx={{ margin: '0.2em' }}
                    key={`skill-tags-${i}`}
                    label={tag}
                />
            ))}
        </SectionWrapper>
    )
}

export default SkillSummary
