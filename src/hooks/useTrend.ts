import { useQuery } from '@tanstack/react-query';
import { formatDistance, parseISO, format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import type { Trends } from '~/@types/trend';
import { api } from '~/services/api';

const getTrend = async (id: string) => {
  const date = format(new Date(), 'yyyy/MM/dd');

  const { data } = await api.get<Trends>(
    `everything?language=en&q=${id}&from=${date}&sortBy=publishedAt&pageSize=50`,
  );

  if (data?.status !== 'ok') return;

  const trends = data?.articles?.map((article) => {
    return {
      id: uuidv4(),
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: formatDistance(parseISO(article.publishedAt), new Date(), {
        addSuffix: true,
      }),
      source: article.source,
    };
  });

  return trends;
};

export const useTrend = (id: string) => {
  return useQuery(['trend', id], () => getTrend(id), {
    enabled: !!id,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
