import { type LoaderProps, Stack, getURL, useLoader } from 'one'
import { RefreshControl } from 'react-native'
import { ScrollView, View, XStack } from 'tamagui'
import { getPhotos } from '@/code/db'
import { PhotoCard } from '@/code/photos/photo-card'
import { PageContainer } from '@/code/ui/PageContainer'

export async function loader({ path }: LoaderProps) {
  try {
    const url = new URL(getURL() + path)
    const urlBase = url.origin
    const photos = getPhotos()

    return {
      photos: photos.map((photo) => ({
        ...photo,
        url: `${urlBase}/public/uploads/${photo.path}`,
      })),
    }
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to fetch feed: ${(error as Error).message}`)
  }
}

export default () => <PhotosPage />

function PhotosPage() {
  const { photos } = useLoader(loader)
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Photos',
        }}
      />

      <PageContainer>
        <ScrollView maxHeight="100%">
          <RefreshControl refreshing={false} />
          <XStack flex={1} flexWrap={'wrap'}>
            {photos.map((item) => (
              <View padding="$4" key={item.id} width="100%" $md={{ width: '50%' }}>
                <PhotoCard {...item} />
              </View>
            ))}
          </XStack>
        </ScrollView>
      </PageContainer>
    </>
  )
}
